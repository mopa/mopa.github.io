# [Linux] Teclado Keychron y teclas multimedia



Hace tiempo que llevo escuchando las bondades de los teclados mecánicos de la marca Keychron, y como necesitaba uno adquirí el modelo K3.

<img alt="Keychron K3" src="/img/keychron-k3.jpg" width=800>

En la parte trasera hay dos botones, con los que podemos elegir si estamos usando cable o bluetooh, mac o windows, pero uso GNU/Linux por lo que las teclas multimedia no funcionan de forma correcta.

<img alt="Keychron K3 Back" src="/img/keychron-k3-back.jpg" width=800>

Los teclados Keychron en Linux usan el driver `hid_apple`, el cual por defecto usa las teclas `F` como las multimedia y necesitamos pulsar `Fn` `+` `tecla` para usar el `F1` y sus consecutivas. Para cambiar esto hay que cambiar el parámetro `fnmode` del módulo del kernel `hid_apple`. Según la documentación,

- `0 = disabled`: Disable the 'fn' key. Pressing 'fn'+'F8' will behave like you only press 'F8'
- `1 = fkeyslast`: Function keys are used as last key. Pressing 'F8' key will act as a special key. Pressing 'fn'+'F8' will behave like a F8.
- `2 = fkeysfirst`: Function keys are used as first key. Pressing 'F8' key will behave like a F8. Pressing 'fn'+'F8' will act as special key (play/pause).

Vamos a establecer un valor para testear la configuración que mejor se adapte
```shell
# cambia <value> por 0, 1 o 2

echo <value> | sudo tee /sys/module/hid_apple/parameters/fnmode
```

Personalmente el valor que le he dado es 2, y como ahora quiero hacer esto algo permenente voy a realizar los siguientes pasos:

- Creamos el fichero `hid_apple.conf`
```shell
sudo touch /etc/modprobe.d/hid_apple.conf
```
- Añadimos a ese fichero la línea `options hid_apple fnmode=<value>`
```shell
echo "options hid_apple fnmode=2" | sudo tee /etc/modprobe.d/hid_apple.conf
```

- Reconstruimos `initramfs`
    - Arch: `sudo mkinitcpio -P`
    - Ubuntu: `sudo update-initramfs -u`
- Reiniciamos

Después de esto la configuración será permenente.

Referencias:
- https://douglastofoli.dev/en/posts/keychron-linux/
- https://gist.github.com/andrebrait/961cefe730f4a2c41f57911e6195e444


