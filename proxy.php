<?php
	header('content-type: application/json');

	$url = 'http://search.twitter.com/search.json?q=' . urlencode($_POST['q']);

	$ch = curl_init($url);

	// curl_setopt($ch, CURLOPT_FILE);
	curl_setopt($ch, CURLOPT_HEADER, 0);

	curl_exec($ch);
	curl_close($ch);

	fclose($fp);
?>