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
	 
	 This will get all the dependencies
	
## Running the project locally
1. Go inside the django app directory: 

	```cd pimpmycause```
2. Run django server:
	
	```python manage.py runserver```
	
3. The project is now running on `http://127.0.0.1:8000/`, go to that address in your browser. 