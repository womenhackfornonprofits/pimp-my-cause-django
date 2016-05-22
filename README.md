# pimp-my-cause-django

1. Install [virtualenv](https://virtualenv.pypa.io/en/stable/): `sudo pip install virtualenv`
2. Install [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) `pip install virtualenvwrapper`
3. Create a new env for the project `mkvirtualenv pimp`
4. Get the code: `git clone git@github.com:womenhackfornonprofits/pimp-my-cause-django.git`
5. Go inside the `pimp-my-cause-django` directory
6. Activate the vistual enviroment `workon pimp` this will now wnsure anything you install is within this enviroment
7. Run `pip install -r requirements.txt` to get all the dependencies
8. Start the Django project: ```cd pimpmycause``` and then `python manage.py runserver`
9. Go to `http://127.0.0.1:8000/` in your browser to see a welcome message