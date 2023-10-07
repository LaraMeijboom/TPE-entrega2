<?php
class ChapterModel{
    private $db;

    function __construct(){
        $this->db = new PDO('mysql:host=localhost;dbname=bd_app;charset=utf8', 'root');
    }

    function getChapters(){
        $query = $this->db->prepare('SELECT * FROM chapters');
        $query->execute();
        return $query->fetchAll(PDO::FETCH_OBJ);
    }

    function addChapter($name, $description, $season_id){
        $query = $this->db->prepare("INSERT INTO chapters(name, description, season_id) VALUES (?,?,?)");
        $query->execute([$name, $description, $season_id]);
        return $this->db->lastInsertId();
    }

    function deleteChapter($chapter_id){
        //ver
        $query = $this->db->prepare("DELETE FROM chapters WHERE $chapter_id");
        $query->execute();
    }
}
