<?php
class SeasonView{

    function showSeasons($seasons){
        $count = count($seasons);
        require './templates/seasonsList.phtml';
    }
}