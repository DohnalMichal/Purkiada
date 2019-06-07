<!DOCTYPE html>
<html lang="cs">

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="Description" content="Stránky školní soutěže Purkiáda">
  <meta charset="UTF-8">
  <title>Purkiáda - přihláška</title>
  <link rel="stylesheet" href="assets/css/main.min.css" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
  <script src="https://unpkg.com/scrollreveal"></script>
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png">
  <link rel="manifest" href="/favicon_io/site.webmanifest">
  <style>
    body {
      background: url("assets/img/prihlaska.jpg") no-repeat center center;
      background-size: cover;
      width: 100%;
      margin: 0;
      background-attachment: fixed;
      overflow: hidden;
    }
    header {
      background: none;
      height: 100px;
    }
    @media (max-width: 786px){  
      .btn, .btn-primary, button {
        width: 276px;
        max-width: 276px;
      }
    }
  </style>
</head>

<body>
<?php 
	/* ----- DATABASE CONNECTION ----- */
    require_once "./config.php";
    $mysqli = new mysqli($db_host, $db_user, $db_pass, $db_db);

    if (mysqli_connect_errno()) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();}
	$mysqli->set_charset("utf8");
?>
  <header>
    <nav class="nav">
      <div class="logo">
        <a href="index.html"><img src="assets/img/logo.svg" width="160px" alt="logo"></a>
      </div>
      <div class="menu">
        <ul>
          <li><a href="prihlaska.php">Přihláška</a></li>
          <li><a href="zadani.html">Zadání</a></li>
          <li><a href="vysledky.html">Výsledky</a></li>
          <li><a href="fotogalerie.html">Fotogalerie</a></li>
          <li><a href="informace.html">Informace</a></li>
        </ul>
      </div>
      <div class="menu-icon">
        <i class="fa fa-bars fa-2x"></i>
      </div>
    </nav>
  </header>
    <form method="post" action="#">
      <div class="form-group">
          <label for="name">Jméno</label><br>
          <input type="text" class="form-control" name="name" aria-describedby="name" aria-required="true"
            placeholder="Jméno" required>    
      </div>
      <div class="form-group">
          <label for="surname">Příjmení</label><br>
          <input type="text" class="form-control" name="surname" aria-describedby="surname" aria-required="true"
            placeholder="Příjmení" required>    
      </div>
      <div class="form-group">
        <label for="email">E-mail</label><br>
        <input type="email" class="form-control" name="email" aria-describedby="emailHelp" aria-required="true"
          placeholder="Zadejte e-mailovou adresu" required>
      </div>
      <div class="form-group">
        <label for="school">Škola</label><br>
        <input type="text" class="form-control" name="school" aria-describedby="school" aria-required="true" placeholder="Škola" required><p><small>Vaše údaje nikdy nesdílíme s nikým jiným.</small></p>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" name="exampleCheck1" required>
        <label class="form-check-label" for="exampleCheck1">Souhlasím s podmínkami o zpracování osobních údajů</label>  
      </div>
      <button type="submit" class="btn btn-primary">Závazně přihlásit</button>
    </form>
    <?php 
	if(isset($_POST['name'])) {
                $jmeno = $_POST['name'];
                $prijmeni = $_POST['surname'];
				$email = $_POST['email'];
				$skola = $_POST['school'];
	$sql = "INSERT INTO `purkiada` (jmeno, prijmeni, skola, email) VALUES ('" .$jmeno. "','" .$prijmeni. "','" .$skola. "','" .$email. "')";
	$mysqli->query($sql);}
	?>
  <script src="./assets/js/app.js"></script>
</body>

</html>