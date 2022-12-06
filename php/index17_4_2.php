<?php
$array = [
    "student_1" => "Julia",
    "student_2" => "Roman",
    "student_3" => "Natalia",
    "student_4" => "Oleg",
    "student_5" => "Victoria"
];

echo ('<ol>');
foreach ($array as $i => $val) {
    echo ('<li>');
    echo ($val);
    echo ('</li>');
}
echo ('</ol>');
?>