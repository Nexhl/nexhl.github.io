if (!([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) { Start-Process powershell.exe "-NoProfile -ExecutionPolicy Bypass -File `"$PSCommandPath`"" -Verb RunAs; exit }
http-server "D:\Desktop\UNIVERSITÀ\UNI_TERZO ANNO\2. SECONDO PERIODO\Communication design II\Ipermedia e sviluppo web\ESAME"

  <nav class="navbar navbar-dark">
        <div class="container-fluid">
    
        <!-- Hamburger menu -->
        <!-- ms-auto https://stackoverflow.com/questions/63948287/bootstrap-5-navbar-align-items-right; differenza ms vs me -->
        <button class="navbar-toggler collapsed ms-auto hamburger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>   

        </div>   
    </nav>