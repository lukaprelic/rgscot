import logging
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from sendgrid import sendgrid, Email
from sendgrid.helpers.mail import Content, Mail

from app.forms import ContactForm
from rgscot import settings

logger = logging.getLogger('views')
context = {
    'navigation': {'Home':[],'Products': [{'WINE COOLERS / SPRITZERS': 'Wine Coolers Spritzers'}, {'WINES': 'wines'}], 'About Us': [],
                   'Contact Us': []}}

def index(request):
    return render(request, 'index.html', {'nav': context})
def wines(request):
    return render(request, 'wines.html', {'nav': context})
def winecoolers(request):
    return render(request, 'winescoolers.html', {'nav': context})
def contactUs(request):
    return sendUsingSendGrid(request)

def aboutUs(request):
    return render(request, 'aboutUs.html', {'nav': context})

def sendUsingSendGrid(request):
    if request.method == 'GET':
        form = ContactForm()
    else:
        form = ContactForm(request.POST)
        if form.is_valid():
            subject = form.cleaned_data['subject']
            from_email = form.cleaned_data['from_email']
            message = form.cleaned_data['message']
            logger.info('sending email: from: ' + from_email + ' subject: ' + subject + ' message: ' + message)
            sg = sendgrid.SendGridAPIClient(apikey=settings.SENDGRID_API_KEY)
            from_email = Email(from_email)
            to_email = Email("luka.prelicads@gmail.com")
            subject = subject
            content = Content("text/plain", message)
            mail = Mail(from_email, subject, to_email, content)
            response = sg.client.mail.send.post(request_body=mail.get())
            logger.info(response.status_code)
            logger.info(response.body)
            logger.info(response.headers)
            return render(request, "contactUsSuccess.html",
                          {'nav': context, 'form': form, 'emailStatus': 'Thank you for reaching out to us'})
    return render(request, "contactUs.html", {'nav': context, 'form': form,
                                              'emailStatus': 'Fill the form below and we will respond as soon as possible'})

def handler404(request, exception):
    return render(request, '404custom.html', {'nav': context})