<?php

class SeasonModel{
    private $db;

    function __construct(){
        $this->db = new PDO('mysql:host=localhost;dbname=bd_app;charset=utf8', 'root');
    }

    function getSeasons(){
        $query = $this->db->prepare('SELECT * FROM seasons');
        $query->execute();
        return $query->fetchAll(PDO::FETCH_OBJ);
    }
}