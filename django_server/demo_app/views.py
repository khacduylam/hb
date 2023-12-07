import requests
from django.shortcuts import render

def showUsers(request):
    res = requests.get(url='http://localhost:8080/api/users')
    users = res.json()['data']

    return render(request, 'show_users.html', {'users': users})
