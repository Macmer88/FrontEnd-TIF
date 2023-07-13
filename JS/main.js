/* Este código selecciona el elemento del documento con el id "header" y le asigna un bloque de código HTML para construir una barra de navegación. El código HTML contiene una estructura de navegación típica de una barra de navegación de Bootstrap, con enlaces a diferentes páginas y un formulario de búsqueda.
El código se encarga de asignar el contenido HTML al elemento con el id "header", lo que resulta en la visualización de la barra de navegación en ese lugar dentro del documento HTML.
*/
document.getElementById(
  "header"
).innerHTML = ` <nav class="navbar navbar-expand-sm navbar-dark bg-dark navegacion">
<div class="container">
  <a class="navbar-brand" href="index.html">    <img src="imagenes/logo.png" alt="logo" width=140px" ></a>
  
          </li>
      </ul>
      </form>
      <div class="container-fluid">
  <form class="d-flex">
      <input class="form-control me-2 light-table-filter" data-table="table_id" type="text" 
      placeholder="Buscar producto...">
      <hr>
      </form>
  </div>
</div>
</nav>
`;

    </div>
  </div>
  </nav>
  `;
