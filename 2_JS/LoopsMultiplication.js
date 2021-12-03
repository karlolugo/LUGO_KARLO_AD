var print = "\n\t\t\t   MULTIPLICATION TABLE\n\n";

for (var x = 1; x < 11; x++) {
    for (var y = 1; y < 11; y++) {
        print += (x * y) + '\t';
    }
    print += '\n';
}

console.log(print);