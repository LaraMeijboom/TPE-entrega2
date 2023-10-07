<?php
  require_once "./app/controllers/Controller.php";
  define('BASE_URL', '//'.$_SERVER['SERVER_NAME'] . ':' . $_SERVER['SERVER_PORT'] . dirname($_SERVER['PHP_SELF']).'/');


  $action = 'home';
  if(!empty($_GET['action'])) {
      $action = $_GET['action'] ;
  }
  
  $params = explode('/' , $action);
  $controller = new Controller() ;
  
  switch ($params[0]) {
      case 'home':
          $controller->showSeasons();
          break;
    }
  ?>