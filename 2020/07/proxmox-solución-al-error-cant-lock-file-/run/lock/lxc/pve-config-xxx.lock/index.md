# [Proxmox] Solución al error: can't lock file '/run/lock/lxc/pve-config-xxx.lock'



El error que me he encontrado en alguna ocasión esporádica en [Proxmox](https://www.proxmox.com/en/) es que no podía parar un contenedor (en concreto un *lxc*) ni tampoco apagarlo, por lo que no podía apagar el sistema.

<img alt="Este es el error en cuestión" src="/img/proxmox-error.png" width=500>

De hecho, al entrar por `SSH` al Proxmox también obtenía el mismo error, o sea era imposible apagarlo de la forma correcta. 

Después de probar diversos comandos, soluciones, navegar por foros y documentación, encontré la solución con el comando `lxc`. Seguí los pasos que [describo a continuación](https://forum.proxmox.com/threads/cannot-shut-down-container.69514/):

```bash
lxc-ls --fancy

lxc-stop <nombre/numero de la maquina o contenedor>
```

Obviamente estos comandos los ejecuté por `SSH`. He leído varias razones por las que se puede dar esto, y creo que la mas plausible según el uso que le he dado al contenedor en cuestión, es que se quede un proceso colgado o abortado. De modo que, !revisad los procesos!

