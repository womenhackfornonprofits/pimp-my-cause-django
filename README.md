# Pimp My Cause [Django]

## Table of Contents

- [Pimp My Cause \[Django\]](#pimp-my-cause-django)
	- [Table of Contents](#table-of-contents)
	- [Requirements](#requirements)
	- [Local Setup](#local-setup)
		- [1. Clone the Repository](#1-clone-the-repository)
		- [2. Create Virtual Environment](#2-create-virtual-environment)
		- [3. Install Dependencies](#3-install-dependencies)
			- [Python Dependencies](#python-dependencies)
			- [Frontend Dependencies](#frontend-dependencies)
		- [4. Configure Database](#4-configure-database)
		- [5. Install Geospatial Libraries](#5-install-geospatial-libraries)
	- [Running the Project](#running-the-project)
	- [Development Guide](#development-guide)
		- [Frontend Changes](#frontend-changes)
	- [Deployment to Heroku](#deployment-to-heroku)
		- [Prerequisites](#prerequisites)
		- [Setup](#setup)
		- [Configuration](#configuration)
		- [Deploy](#deploy)
	- [Technical Notes](#technical-notes)
		- [Django 3.2+ Compatibility](#django-32-compatibility)

---

## Requirements

- **Python 3.11** (matches Heroku production environment)
- PostgreSQL with PostGIS extension
- Node.js and npm for frontend build

---

## Local Setup

### 1. Clone the Repository

```bash
git clone git@github.com:womenhackfornonprofits/pimp-my-cause-django.git
cd pimp-my-cause-django
```

### 2. Create Virtual Environment

**Option A: Using venv (Recommended)**

```bash
python3.11 -m venv venv
source venv/bin/activate
python --version  # Should show Python 3.11.x
pip install --upgrade pip
```

*If you don't have Python 3.11, install it first: `brew install python@3.11`*

**Option B: Using virtualenvwrapper**

```bash
pip install virtualenv virtualenvwrapper
source /usr/local/bin/virtualenvwrapper.sh
mkvirtualenv pimp
workon pimp
```

### 3. Install Dependencies

#### Python Dependencies

```bash
pip install -r requirements.txt
```

#### Frontend Dependencies

```bash
cd pimpmycause
npm install
cd ..
```

### 4. Configure Database

Install PostgreSQL (if not already installed):
- Via Homebrew: `brew install postgresql`
- OR download the [Postgres App](http://postgresapp.com/)

Start the PostgreSQL server:
- If using the App, start the server from there
- If using command line: `brew services start postgresql`

Create the database:

```bash
createdb pimpmycause
```

### 5. Install Geospatial Libraries

Used to store spatial data about user locations and calculate distances between users.

Install using Homebrew Bundle:

```bash
brew bundle
```

If you can't use Homebrew, install the dependencies manually as described in the Brewfile. See [Django GIS Instructions](https://docs.djangoproject.com/en/1.11/ref/contrib/gis/install/#macos).

---

## Running the Project

**Activate your virtual environment first:**

```bash
source venv/bin/activate  # for venv
# OR
workon pimp  # for virtualenvwrapper
```

Then run:

```bash
cd pimpmycause
python manage.py migrate
python manage.py runserver
```

Visit [http://127.0.0.1:8000](http://127.0.0.1:8000/)

---

## Development Guide

### Frontend Changes

1. Edit CSS and JavaScript in the `src` folder
2. Edit HTML templates in `pimpmycause/templates`
3. Run `npm run watch` to watch for changes
4. Reload the browser to see changes

---

## Deployment to Heroku

### Prerequisites

1. Create a [Heroku account](https://www.heroku.com/)
2. Get added to the app in the Heroku Dashboard (ask a team member)
3. Login: `heroku login`

### Setup

```bash
heroku git:remote -a staging-pimpmycause
```

### Configuration

The app requires geospatial libraries and specific buildpacks:
- **Geospatial buildpack**: Installs GDAL, GEOS, and PROJ libraries
- **Python buildpack**: Installs Python dependencies

Set required environment variables:

```bash
heroku config:set AWS_ACCESS_KEY_ID=your_access_key
heroku config:set AWS_SECRET_ACCESS_KEY=your_secret_key
heroku config:set AWS_STORAGE_BUCKET_NAME=your_bucket_name
heroku config:set AWS_STORAGE_REGION=eu-west-2
heroku config:unset DISABLE_COLLECTSTATIC
```

### Deploy

```bash
git status  # Ensure all changes are committed
git push heroku master
```

Visit [https://staging-pimpmycause.herokuapp.com](https://staging-pimpmycause.herokuapp.com/)

---

## Technical Notes

### Django 3.2+ Compatibility

This project has been updated for Django 3.2+. Key updates include:

- Removed `python_2_unicode_compatible` decorators from all models
- Updated imports to use Django 3.2+ compatible functions
- Added `DEFAULT_AUTO_FIELD` setting for primary keys
- Updated packages: django-countries (7.6.1), django-registration-redux (2.13), django-filter (22.1), whitenoise (6.6.0), boto3 (1.34.0)
- Migrated from boto2 to boto3 for AWS integration
