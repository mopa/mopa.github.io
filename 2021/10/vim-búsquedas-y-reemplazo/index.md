# [Vim] Búsquedas  y Reemplazo



Esta operación tan básica no puede faltar en cualquier editor, y en Vim (realmente uso Neovim) me resulta muy fácil hacerla. 

## Forma 1

Normalmente lo que me suele pasar es que mientras estoy escribiendo o programando, **me encuentro con la palabra que quiero sustituir y directamente hacer el cambio**. 

Para esto, estando en el modo `Normal` y con el **cursor encima de la palabra** 
- Pulsamos la tecla `*`
- Escribimos `ciw` (*change inner word*) y seguidamente la palabra que queramos
- Pulsamos `Esc`
- Con la tecla `n` nos movemos a la siguiente ocurrencia y para repetir lo anterior pulsamos `.`

<video controls style="width:100%; height:auto;">
	<source src='/videos/vim-find-replace.webm' type="video/webm">
</video>

## Forma 2

Si lo que quiero es **sustituir todas las coincidencias de la palabra** que busco, lo hago con el comando `:substitute` (`:s`). La forma de construir las búsquedas con este comando es
```vim
:[range]s/{pattern}/{string}/[flags] [count]
```

Este comando busca en cada línea del rango (`[range]`) el patrón (`{pattern}`) especificado, y lo reemplaza por la cadena (`{string}`). El contador (`[count]`) es un entero positivo que multiplica el número de veces la ejecución del comando. Si no indicamos `[range]` ni `[count]` sólo reemplazará en la línea actual.

Como lo que busco es buscar y reemplazar en todo el fichero
```vim
:%s/foo/bar/g
```

Si queremos tener un mensaje de confirmación en cada sustitución
```vim
:%s/foo/bar/gc
```

Para ignorar el *case sensitivity* (la sensibilidad de mayúsculas y minúsculas)
```vim
:%s/foo/bar/gi
```

<video controls style="width:100%; height:auto;">
	<source src='/videos/vim-find-replace-2.webm' type="video/webm">
</video>

## Uniendo estas dos formas

Para rematar la jugada vamos a unir estas dos formas de búsqueda-sustitución en un comando y así ser más rápidos. En nuestro fichero de configuración de Vim o de Neovim añadimos lo siguiente
```vim
nnoremap <Leader>s :%s/\<<C-r><C-w>\>//g<Left><Left>
```

Ahora pulsando la tecla `<Leader>` (por defecto en Vim es `\`) + `s`, tendremos directamente la búsqueda realizada y solo tenemos que escribir el reemplazo.

<video controls style="width:100%; height:auto;">
	<source src='/videos/vim-find-replace-3.webm' type="video/webm">
</video>

## Reemplazar una palabra con texto copiado

Otra operación que de vez en cuando me pasa, es precisamente lo que indica el título, copio una palabra y la quiero sustituir por otra. 
- Copio la palabra con `yiw`
- Me muevo a la palabra que quiero sustituir y pulso `viwp`

<video controls style="width:100%; height:auto;">
	<source src='/videos/vim-find-replace-4.webm' type="video/webm">
</video>



## Referencias
- [Find and Replace in Vim / Vi](https://linuxize.com/post/vim-find-replace/)
- [Search and replace the word under the cursor](https://vim.fandom.com/wiki/Search_and_replace_the_word_under_the_cursor)
- [Replace a word with yanked text](https://vim.fandom.com/wiki/Replace_a_word_with_yanked_text)

