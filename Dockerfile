FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /app
WORKDIR /app
COPY requirements.txt /app/
EXPOSE 80
RUN pip install -r requirements.txt
#RUN /venv/bin/python manage.py collectstatic --noinput
COPY . /app/
#COPY rgscot /app/
#COPY db.sqlite3 /app/
#COPY manage.py /app/
RUN python /app/manage.py collectstatic --noinput
CMD python /app/manage.py runserver 0.0.0.0:80