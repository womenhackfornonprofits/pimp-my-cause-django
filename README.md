# Pimp My Cause [Django]

## Setup

1. Install [virtualenv](https://virtualenv.pypa.io/en/stable/): 

	```sudo pip install virtualenv```

2. Install [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/install.html):

3. Source the `virtualenvwrapper`:
	```source /usr/local/bin/virtualenvwrapper.sh```
	
	**NOTE**: To help do this automatically on every new shell you open add the line above to your `.bash_profile` or  `.bashrc`

4. Create a new env for the project:
 
	 ```mkvirtualenv pimp```
6. Get the code: 

	```git clone git@github.com:womenhackfornonprofits/pimp-my-cause-django.git```
	
6. Go inside the `pimp-my-cause-django` directory:
	
	```cd pimp-my-cause-django```

7. Activate the virtual enviroment:
 
	 ```workon pimp``` 
	 
	 This will now ensure anything you install is within this enviroment.

8. You will need to have [Postgres installed](https://www.postgresql.org/download/) and up and running. You can onstall it via:
	- Homebrew ```brew install postgresql```
	- OR Download the [Postgress App](http://postgresapp.com/)

9. Make sure the Postgres Server is up and running:
	- If using the App simply start the server from there
	- If using command line: ``brew services start postgresql``

9. Install the requirements:

	 ```pip install -r requirements.txt``` 
	 
	 This will get all the dependencies.

9. Create a database locally for the project to run:
	
	```createdb pimpmycause```

10. Go inside frontend folder: 
	
	```cd frontend```

11. Install all the dependencies:

	 ```npm install```

	 This will get all the dependencies

	
## Running the project locally
1. Go inside the django app directory: 

	```cd pimpmycause```
2. Run django server:
	
	```python manage.py runserver```
	
3. The project is now running on `http://127.0.0.1:8000/`, go to that address in your browser. 
4. You may see a message that you have unapplied migrations, when you see this simply run the command below which will create any tables and fields in the database:

	```python manage.py migrate```


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
