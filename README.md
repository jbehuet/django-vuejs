# DJANGO AND VUEJS

First test for stack [Django](https://www.djangoproject.com/) and [VueJS](https://vuejs.org/)

## How to

Requirements :
* Python
* NodeJS
* SQLite

### Django

We'll be installing [Django](https://docs.djangoproject.com/en/1.9/topics/install/#installing-official-release) and
[Djangorestframework](http://www.django-rest-framework.org/).

You can install it in a virtual environment or globally. 
The first is [recomended](https://realpython.com/blog/python/python-virtual-environments-a-primer).

#### Create a virtual environment (optional)

With [virtualenv](https://realpython.com/blog/python/python-virtual-environments-a-primer/)

`$ virtualenv venv`

With the [venv](https://docs.python.org/3/library/venv.html#module-venv) library (Python 3.3 or latter)

`$ python -m venv venv`

Activate your virtual environment

Posix: `$ source venv/bin/activate` 

Windows: `venv\Scripts\activate`

#### Install

`$ pip install -r requirements.txt`

### Prepare database

`$ python backend/manage.py migrate`

### Create SuperUser

`$ python backend/manage.py createsuperuser`

### Install node modules

`$ npm install`

and into frontend-src folder

`$ cd frontend-src && npm install`

### Build frontend

`$ gulp build`

### Run

`$ python backend/manage.py runserver`
