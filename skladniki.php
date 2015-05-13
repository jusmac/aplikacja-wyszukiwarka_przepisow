<?php

$skladniki = array(
       'jajka',
       'm¹ka',
       'mleko',
       'cukier'
);

header('Content-Type: application/json');
echo json_encode($skladniki);