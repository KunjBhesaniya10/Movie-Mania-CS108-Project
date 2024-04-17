import requests
from fake_useragent import UserAgent
from bs4 import BeautifulSoup
import json
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By   
from selenium.webdriver.chrome.options import Options
import time

def scrap_movies_info() :
    ua=UserAgent()
    user=ua.random       #creating random fake user.
    options = Options()
    options.add_argument(f'user-agent={user}')
    options.add_experimental_option('excludeSwitches', ['enable-automation'])
    user_agent = UserAgent().random  # creating random user every time request is send to website.
    header={'User-Agent': user_agent}
  

    url='https://www.imdb.com/list/ls091520106/'
    # url='https://www.imdb.com/search/title/?groups=top_100&sort=user_rating,desc'
    r = requests.get(url,headers=header)
    soup = BeautifulSoup(r.text,'html.parser')

    ''' movie_info = [{
        'title': '',
        'duration':'',
        'year_of_release':'',
        'summary':'',
        'director':'',
        'IMDB_rating':'',
        'genre':[],
        'movie_poster':'',
        'main_cast':[],
        'photos':[]
    }] '''  #arrays of dict to store movie info  
    movies_info =[]

    services= webdriver.ChromeService(executable_path='chromedriver.exe')
    driver = webdriver.Chrome(service=services)
    driver.get(url)
    movie_titles = driver.find_elements(By.CLASS_NAME,'lister-item')
    # driver.execute_script('arguments[0].scrollIntoView();', btn)
    movie_count=0
    time.sleep(10)
    for movie in movie_titles :
        time.sleep(1)  #to give time to load images and also did some manual scrolling so that images loaded properly before scrapping.
        movie_count+=1     #for variable XPATH to extract summary.
        movie_info = {}
        movie_link = movie.find_element(By.CLASS_NAME,'lister-item-header').find_element(By.TAG_NAME,'a').get_attribute('href')
        movie_title = movie.find_element(By.CLASS_NAME,'lister-item-header').find_element(By.TAG_NAME,'a').text
        release_yr= movie.find_element(By.CLASS_NAME,'lister-item-year').text
        # print(release_yr)
        runtime = movie.find_element(By.CLASS_NAME,'runtime').text
        # print(runtime)
        genre = movie.find_element(By.CLASS_NAME,'genre').text
        # print(genre)
        imdb = movie.find_element(By.CLASS_NAME,'ipl-rating-star__rating').text
        # print(imdb)
        summary = movie.find_element(By.XPATH,f'//*[@id="main"]/div/div[4]/div[3]/div[{movie_count}]/div[2]/p[2]').text
        actors = movie.find_element(By.XPATH,f'//*[@id="main"]/div/div[4]/div[3]/div[{movie_count}]/div[2]/p[3]').text
        # print(actors)
        director = actors.strip().split('|')[0].split(':')[1].strip().split(', ')
        actors = actors.strip().split('|')[1].split(':')[1].strip().split(', ')
        movie_poster= movie.find_element(By.XPATH,f'//*[@id="main"]/div/div[4]/div[3]/div[{movie_count}]/div[1]/a/img').get_attribute('src')
        print(movie_poster)
        # print(director,actors)
        movie_info['title'] = movie_title
        movie_info['year_of_release'] = release_yr
        movie_info['duration'] = runtime
        movie_info['genre'] = genre.strip().split(',')
        movie_info['IMDB_rating']=imdb
        movie_info['summary'] = summary
        movie_info['director'] = director
        movie_info['main_cast'] = actors
        movie_info['movie_poster']=movie_poster
        # print(movie_title,release_yr)
        movies_info.append(movie_info)
    driver.quit()
    return movies_info
   
if __name__ == '__main__' :
   movies_scrapped_data= scrap_movies_info()
   with open('scrapped_movie_data.json','w') as f :
       f.write(json.dumps(movies_scrapped_data)) # stored in json format temporarily.
