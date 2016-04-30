from django.db import models
from datetime import datetime

class Todo(models.Model):
    description = models.TextField()
    createdAt = models.DateTimeField(default=datetime.now, blank=True)
