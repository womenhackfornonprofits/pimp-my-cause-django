# Pimp My Cause [Django]

## Virtual Environment Setup
This allows you to install all the Python dependencies in a "box" so they are not globally installed and clashing with other projects. 
1. Install [virtualenv](https://virtualenv.pypa.io/en/stable/):
	`pip install virtualenv`
2. Install [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/install.html):
	`pip install virtualenvwrapper`
	*You can skip this and use [virtualenv](https://virtualenv.pypa.io/en/stable/) installed in a step before directly, virtualenvwrapper allows for nice interfacing with virtualenv
3. Source the `virtualenvwrapper`:
	`source /usr/local/bin/virtualenvwrapper.sh`
	**NOTE**: To help do this automatically on every new shell you open add the line above to your `.bash_profile` or  `.bashrc`
4. Create a new env for the project:
	 `mkvirtualenv pimp`


## Clone the repo
1. Get the code:
	`git clone git@github.com:womenhackfornonprofits/pimp-my-cause-django.git`

## Install Python dependencies
1. Go inside the `pimp-my-cause-django` directory:
	`cd pimp-my-cause-django`
2. Activate the virtual enviroment:
	 `workon pimp`
	 This will now ensure anything you install is within this environment.
3. Install the requirements:
	 `pip install -r requirements.txt`
	 This will get all the Python dependencies.

## Database
1. You will need to have [Postgres installed](https://www.postgresql.org/download/) and up and running. You can install it via:
	- Homebrew `brew install postgresql`
	- OR download the [Postgres App](http://postgresapp.com/)
2. Make sure the Postgres Server is up and running:
	- If using the App simply start the server from there
	- If using command line: `brew services start postgresql`
3. Create a database locally for the project to run:
	`createdb pimpmycause`

## GEO Spatial dependencies
This is used to allow us to store Spatial data about user locations and calculate distance between users.
12. Install all the Geo Django dependencies using [Homebrew Bundle](https://github.com/Homebrew/homebrew-bundle)
	`brew bundle`
	If you can't use Homebew, you can install the dependencies mentioned in the Brewfile manually. [Django GIS Intstructions](https://docs.djangoproject.com/en/1.11/ref/contrib/gis/install/#macos)
2. Install front-end dependencies:

	`cd pimpmycause`
	`npm install`


## Running the project locally
1. Go inside the django app directory:
	`cd pimpmycause`
2. Run django server:
	`python manage.py runserver`
3. Go to [127.0.0.1:8000](http://127.0.0.1:8000/)
4. You may see a message that you have unapplied migrations. When you see this simply run the command below which will create any tables and fields in the database:
	`python manage.py migrate`

## Front End changes
1. Make css and javascript changes in the `src` folder
2. Make any HTML changes in the Django templates located in `pimpmycause/templates`
3. Use `npm run watch` to run webpack and watch for changes.
4. You will have to reload the [127.0.0.1:8000](http://127.0.0.1:8000/) link after adding changes

## Deploying to Heroku
1. Create a Heroku Account
2. Get added to the app in the Heroku Dashboard (ask a team member)
3. In the terminal `heroku login`
4. Within your project directory `heroku git:remote -a staging-pimpmycause`
5. Once you are ready to deploy, from master branch you can run `git push heroku staging` make sure you have committed all the changes before running this and the `git status` is clean.
6. Go to [https://staging-pimpmycause.herokuapp.com](https://staging-pimpmycause.herokuapp.com/) to view the live site.
