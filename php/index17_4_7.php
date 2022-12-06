<?php
$arr = [];
$i = 245;

while ($i < 287) {
	if ($i % 2 == 0) {
        $arr[] = $i;
}
    $i++;
}

foreach ($arr as $value) {
    echo $value . ', ';
}
?>