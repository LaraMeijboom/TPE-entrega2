<?php
include_once './app/models/ChapterModel.php';
include_once './app/models/SeasonModel.php';
include_once './app/views/SeasonView.php';

class Controller{
    private $chapterView;
    private $seasonView;
    private $chapterModel;
    private $seasonModel;

    function __construct(){
        $this->chapterModel = new ChapterModel();
        $this->seasonModel = new SeasonModel();
        $this->seasonView = new SeasonView();    
    }

    function showSeasons(){
        $seasons = $this->seasonModel->getSeasons();
        $this->seasonView->showSeasons($seasons);
    }
}