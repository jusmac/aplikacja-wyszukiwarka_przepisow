<?php

$skladniki = array(
       'jajka',
       'm�ka',
       'mleko',
       'cukier'
);

header('Content-Type: application/json');
echo json_encode($skladniki);