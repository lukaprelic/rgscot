
# +++++++++++ DJANGO +++++++++++
# To use your own django app use code like this:
# The pythonanywhere wsgi
import os
import sys
#
## assuming your django settings file is at '/home/rgscot/mysite/mysite/settings.py'
## and your manage.py is is at '/home/rgscot/mysite/manage.py'
path = '/home/rgscot/rgscot'
if path not in sys.path:
    sys.path.append(path)

os.environ['DJANGO_SETTINGS_MODULE'] = 'rgscot.settings'
#
## then:
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()