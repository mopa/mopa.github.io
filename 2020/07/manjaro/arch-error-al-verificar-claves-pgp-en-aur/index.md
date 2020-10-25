# [Manjaro/Arch] Error al verificar claves PGP en AUR



En mi día a día uso Manjaro con XFCE, y también cierto software para escuchar
música (Spotify). Para instalarlo tuve que hacerlo por los repositorios AUR,
pero en una reciente actualización cual fue mi sorpresa al ver este error:
`ERROR: One or more PGP signatures could not be verified!`.

Los que usamos Arch y sus derivados estamos siempre con el dilema de los
repositorios AUR, proveen una gran cantidad de software pero, ¿a qué precio?
Bueno, la cuestión aquí es resolver el problema de las claves PGP, en concreto
las de Spotify.

Primero nos dirigimos a la sección de [descargas de Spotify](https://www.spotify.com/mx/download/linux/), y buscamos la parte donde especifica la instalación via línea de comandos (*Install via command line*). Solo nos ofrece la instalación por `Snap` y si usamos `Debian / Ubuntu`. No es ningún problema, buscamos la línea `curl -sS https://download.spotify.com/debian/pubkey_0D811D58.gpg | sudo apt-key add - `, y la adaptamos a nuestro sistema Manjaro/Arch:
```bash
curl -sS https://download.spotify.com/debian/pubkey_0D811D58.gpg | gpg --import -
```

Ahora solo queda instalarlo
```bash
pamac build spotify
```

Con esto ya queda solucionado. Aunque lo haya realizado para Spotify, esta
solución se puede extrapolar a otras Apps con el mismo problema.

