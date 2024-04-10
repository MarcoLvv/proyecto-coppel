from django.db import models

# Create your models here.

class Productos(models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.TextField(max_length=300)
    precio = models.DecimalField(max_digits=11, decimal_places=2)
    imagen = models.ImageField(upload_to='coppel-back/resources/images')

    def __str__(self):
        return self.nombre