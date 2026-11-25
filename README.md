# FumiTotal — Control Profesional de Plagas y Fumigaciones

Sitio web comercial y técnico para **FumiTotal**, empresa de control integral de plagas en Uruguay.

## 🛠️ Tecnologías utilizadas

- **HTML5 semántico**: Estructura accesible, optimizada para SEO (títulos, meta-etiquetas descriptivas, Open Graph y jerarquía H1-H3).
- **CSS3 Vanilla**: Hoja de estilos moderna y responsive basada en CSS Custom Properties (variables), CSS Grid y Flexbox. Paleta corporativa sobria (verde, negro y blanco).
- **JavaScript Vanilla**: Interactividad ligera sin librerías pesadas (menú móvil accesible con soporte para teclado, desplazamiento suave y gestión de envíos).
- **Netlify Forms**: Formulario de contacto preparado para recepción automática de presupuestos sin necesidad de servidor ni base de datos externa.

---

## 📁 Estructura del proyecto

```text
fumitotal/
├── index.html                      # Página principal (Hero, Sobre nosotros, Servicios, Plagas, Contacto, Footer)
├── .gitignore                      # Exclusiones estándar para Git
├── README.md                       # Documentación técnica del proyecto
├── css/
│   └── styles.css                  # Hoja de estilos centralizada y responsive
├── js/
│   └── main.js                     # Interactividad, menú accesible y gestión del formulario
├── img/                            # Fotografías de plagas y logotipo
│   ├── logo.jpg
│   ├── cucarachas.jpg
│   ├── chinches.jpg
│   ├── hormigas.jpg
│   ├── roedores.jpg
│   ├── pulgas.jpg
│   ├── garrapatas.jpg
│   ├── moscas.jpg
│   ├── mosquitos.jpg
│   └── arañas.jpg
└── categorias/                     # Páginas técnicas individuales de cada plaga
    ├── cucarachas.html
    ├── chinches.html
    ├── hormigas.html
    ├── roedores.html
    ├── pulgas.html
    ├── garrapatas.html
    ├── moscas.html
    ├── mosquitos.html
    └── aranas.html
```

---

## 🚀 Publicación y Hosting en Netlify

El proyecto está 100% listo para ser desplegado en Netlify conectando un repositorio de GitHub:

1. **Subir a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Lanzamiento web FumiTotal"
   git branch -M main
   git remote add origin <URL_DE_TU_REPOSITORIO>
   git push -u origin main
   ```

2. **Conectar en Netlify**:
   - Ingresar a [Netlify](https://www.netlify.com/).
   - Seleccionar **Add new site** > **Import an existing project** > **GitHub**.
   - Elegir el repositorio de `fumitotal`.
   - Como es un sitio estático, **Build command** y **Publish directory** pueden dejarse vacíos (o Publish directory en `/`).
   - Clic en **Deploy site**.

3. **Netlify Forms**:
   - El formulario `name="contacto"` en `index.html` cuenta con los atributos `data-netlify="true"` y honeypot anti-spam.
   - Netlify detectará el formulario automáticamente en el primer despliegue y registrará las consultas en la pestaña **Forms** del panel de control de Netlify, permitiendo configurar notificaciones automáticas por correo electrónico.

---

## 📋 Plagas tratadas

1. **Cucarachas**: *Blattella germanica* y *Periplaneta americana*. Plan de acción con efecto dominó (coprofagia y necrofagia).
2. **Chinches de cama**: *Cimex lectularius*. Protocolo en dos etapas para cortar el ciclo de reproducción.
3. **Hormigas**: Podadoras, negras comunes y coloradas. Tratamiento con trofalaxis hacia la reina y protección contra daños en techos de isopanel y pisos.
4. **Roedores**: *Mus musculus*, *Rattus rattus* y *Rattus norvegicus*. Sellado de accesos y terminales portacebos de máxima seguridad.
5. **Pulgas**: *Ctenocephalides felis* y *canis*. Abordaje del ciclo ambiental (huevo, larva, pupa y adulto).
6. **Garrapatas**: Orden *Ixodida*. Desinsectación de muros, jardines, grietas y canteros.
7. **Moscas**: Domésticas, de la fruta, de los drenajes, metálicas y de establos. Localización y neutralización de focos y criaderos.
8. **Mosquitos**: *Culex pipiens*, *Aedes aegypti*, mosquitos de humedales e inundación. Control larvario y espacial.
9. **Arañas**: *Loxosceles laeta* (araña de los cuadros), viuda negra y arañas de jardín. Detección de refugios y tratamiento específico.
