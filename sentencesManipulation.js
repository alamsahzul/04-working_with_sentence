function sentencesManipulation(sentence)
{
  var container = sentence.split(' ');
  var result   = [];
  for (i=0; i<container.length; i++) {
    if (container[i].charAt(0)=='a' || container[i].charAt(0)=='i' || container[i].charAt(0)=='u' || container[i].charAt(0)=='e' || container[i].charAt(0)=='o' )
    {
      result.push(container[i]);
    }
    else
    {
      var awal = container[i].charAt(0);
      var tambah = 'nyo';
      var hapus = container[i].substr(1);
      result.push(hapus.concat(awal,tambah));
    }
    }
      console.log(result.join(" "));
}

sentencesManipulation('my mother go to the market to buy some vegetables');
