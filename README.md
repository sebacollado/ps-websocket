# ps-websocket

## Descripción

Demostración del uso de WebSocket para la asignatura Protocolos de Seguridad del Máster en Seguridad Informática de la Universidad de Jaén.

## Despliegue

A continuación se muestran los pasos necesarios para lanzar el servicio en una máquina o instancia nueva (Ubuntu/Linux).

1. Obtener el proyecto desde GitHub.

```
git clone https://github.com/sebacollado/ps-websocket.git
```

2. Preparar el entorno del sistema operativo.

```
# actualiza las fuentes de paquetes
sudo apt-get update

# prepara el compilador para paquetes npm
sudo apt-get install -y build-essential

# instala node.js v10. ver más https://nodejs.org/es/download/package-manager/
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. Preparar dependencias del proyecto.

```
# desde la carpeta raíz del proyecto
npm install
```

4. Lanzar el servicio.

```
# desde la carpeta raíz del proyecto
node webserver.js
```

5. Configurar la salida del servicio al exterior.

    Este paso depende del entorno donde se realice el despliegue. Generalmente se debe exponer el puerto 80 (donde sirve Node.js en este proyecto) hacia el 80 de la instancia/máquina donde se ejecute.
