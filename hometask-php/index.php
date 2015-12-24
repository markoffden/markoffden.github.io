<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hometask</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <?php
        if (isset($_GET['min']) && isset($_GET['max']) && isset($_GET['amount'])) {
            $min = $_GET['min'];
            $max = $_GET['max'];
            $amount = $_GET['amount'];
            $startIndex = $_GET['startIndex'];
            $stopIndex = $_GET['stopIndex'];
            $numbers = array();
            if ($min >= $max || $amount <= 0 || $amount > ($max - $min)) {
                echo '<img src="images/error.jpg" alt="Error"><br><a href="index.php">Back to the Form</a>';
            } else {
                for ($i = 1; $i <= $amount; $i++) {
                    $numbers[] = floor(rand($min, $max));
                }
                function taskOne($array, $startSlice, $stopSlice) {
                    $howManyNegatives = 0;
                    foreach ($array as $value) {
                        if ($value < 0) {
                            $howManyNegatives++;
                        }
                    }
                    $multRange = 1;
                    if ($startSlice >= $stopSlice || $startSlice < 0 || $stopSlice < 0) {
                        echo '<img src="images/error.jpg" alt="Error"><br><a href="index.php">Back to the Form</a>';
                    } else {
                        $indexRange = $stopSlice - $startSlice;
                        $newArray = array_slice($array, $startSlice, $indexRange);
                        foreach ($newArray as $newValue) {
                            $multRange*=$newValue;
                        }
                        echo 'Answer: the number of negatives is ' . $howManyNegatives . ', and multiplying all the values within provided range we get ' . $multRange . '<br><a href="index.php">Back to the Form</a>';                    
                    }
                }
                function taskTwo($array, $maximum) {
                    $minimum = $maximum;
                    foreach ($array as $value) {
                        if ($value < $minimum) {
                            $minimum = $value;
                        }
                    }
                    $key = array_search($minimum, $array);
                    for ($i = 0; $i < $key; $i++) {
                        echo ($array[$i] * $minimum) . '<br>';
                    }
                    echo '<br><a href="index.php">Back to the Form</a>';
                }
                if ($_GET['task'] == 1) {
                    taskOne($numbers, $startIndex, $stopIndex);
                }
                else if ($_GET['task'] == 2) {
                    taskTwo($numbers, $max);
                } else {
                    echo '<img src="images/error.jpg" alt="Error"><br><a href="index.php">Back to the Form</a>';
                }                
            }
        } else { ?>
        
    <form method="get">
        <label for="min">Enter Minimum value</label>
        <input type="number" name="min" required><br>
        <label for="max">Enter Maximum value</label>
        <input type="number" name="max" required><br>
        <label for="amount">Enter Amount of numbers</label>
        <input type="number" name="amount" required><br>
        <label for="startIndex">Enter Array range Start index</label>
        <input type="number" name="startIndex" value="0"><br>
        <label for="stopIndex">Enter Array range Stop index</label>
        <input type="number" name="stopIndex" value="1"><br>
        <label for="task">Which task should I solve?</label>
        <input type="radio" name="task" value="1" checked> 1
        <input type="radio" name="task" value="2"> 2<br>
        <input type="submit" value="Send your data!"><br>
    </form>
    
    <?php } ?>
</body>
</html>