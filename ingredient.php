<?php

$skladniki = array(
       array("id" => "0", "label" => "Mąka", "value" => "Mąka pszenna"),
       array("id" => "1", "label" => "Jaka", "value" => "Jajka kurze średnie"),
       array("id" => "2", "label" => "Mleko", "value" => "Mleko krowie 2%"),
       array("id" => "3", "label" => "Cukier", "value" => "Cukier buraczany kryształ")
);

header('Content-Type: application/json');
echo json_encode($skladniki);