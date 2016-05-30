# Pimp My Cause [Django]

## Setup

1. Install [virtualenv](https://virtualenv.pypa.io/en/stable/): 

	```sudo pip install virtualenv```

2. Install [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/install.html):

	 ```pip install virtualenvwrapper```
3. Create a new env for the project:
 
	 ```mkvirtualenv pimp```
4. Get the code: 

	```git clone git@github.com:womenhackfornonprofits/pimp-my-cause-django.git```
	
5. Go inside the `pimp-my-cause-django` directory:
	```cd pimp-my-cause-django```
6. Activate the vistual enviroment:
 
	 ```workon pimp``` 
	 
	 This will now ensure anything you install is within this enviroment.
7. Install the requirements:

	 ```pip install -r requirements.txt``` 
	 
	 This will get all the dependencies.
8. You will need to have [Postgres installed](https://www.postgresql.org/download/) and up and running:
	
	```brew install postgresql```
9. Create a database locally for the project to run:
	
	```createdb pimpmycause```
10. Go inside frontend folder: 
	
	```cd frontend```
11. Install all the dependencies:

	 ```npm install```
	
## Running the project locally
1. Go inside the django app directory: 

	```cd pimpmycause```
2. Run django server:
	
	```python manage.py runserver```
	
3. The project is now running on `http://127.0.0.1:8000/`, go to that address in your browser. 

## Front End changes
1. Make css and javascript changes in the ```frontend``` folder
2. Make any HTML changes in the Django templates located in `pimpmycause/templates`
3. Use `grunt default` in the frontend folder to build, watch and copy all the required files automatically into the Django static folder.

## Deploying to Heroku
1. Create a Heroku Account
2. Get added to the app in the Heroku Dashboard
3. In the terminal `heroku login`
4. Within you project directory `heroku git:remote -a staging-pimpmycause`
5. Once you are ready to deploy, from master branch you can run `git push heroku master` make sure you have commited all the changes before running this and the `git status` is clean.
6. Go to https://staging-pimpmycause.herokuapp.com/ to view the live site.
