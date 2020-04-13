def camel(x):
    x = x.split(" ")
    for i in range(len(x)):
        x[i] = x[i][0].upper()+x[i][1:]
    x = "".join(x)
    x = x.replace("'", "")
    if "(" in x:
        x = x[:x.index("(")] + x[x.index(")")+1:]
    return x

hashToInt = {}
def anonymize(ipAddressHash):
   if ipAddressHash not in hashToInt:
       hashToInt[ipAddressHash] = len(hashToInt)
   return str(hashToInt[ipAddressHash])

itos_coordinates_subjects = None
itos_coordinates_trials = None
with open("trials.tsv", "w") as outFile_trials:
    with open("subjects.tsv", "w") as outFile_subjects:
        with open("../results/results", "r") as inFile:
            for line in inFile:
                line = line.strip()
                if line.startswith("#"):
                    if len(line) < 5:
                        continue
        #            print(line)
                    if line.startswith("# Columns"):
                        stoi_coordinates = {}
                        itos_coordinates = {}
                    elif ord(line[2]) >= 48 and ord(line[2]) <= 57:
                        line = line[2:-1]
                        dot = line.index(". ")
                        position, value = line[:dot], line[dot+2:]
                        print(position, value)
                        stoi_coordinates[value] = int(position)-1
                        itos_coordinates[int(position)-1] = value
                else:
                  line = line.split(",")
                  print(line)
                  print("STOI COORDINATES", stoi_coordinates)
                  assert len(line) == len(stoi_coordinates)
                  assert "Controller name" in stoi_coordinates
                  if line[stoi_coordinates["Controller name"]] == "Form":
                      if itos_coordinates_subjects is not None:
                          assert itos_coordinates_subjects == itos_coordinates
                      else:
                          print("\t".join([camel(itos_coordinates[i]) for i in range(len(line))]), file=outFile_subjects)
                          itos_coordinates_subjects = itos_coordinates
                      if line[stoi_coordinates["Field name"]] in ["worker_id", "hitcode"]:
                              continue
                      line[stoi_coordinates["MD5 hash of participant's IP address"]] = anonymize(line[stoi_coordinates["MD5 hash of participant's IP address"]])
                      print("\t".join(line), file=outFile_subjects)
                  elif  line[stoi_coordinates["Controller name"]] == "Maze":
                      if itos_coordinates_trials is not None:
                          assert itos_coordinates_trials == itos_coordinates
                      else:
                          print("\t".join([camel(itos_coordinates[i]) for i in range(len(line))]), file=outFile_trials)
                          itos_coordinates_trials = itos_coordinates
                      line[stoi_coordinates["MD5 hash of participant's IP address"]] = anonymize(line[stoi_coordinates["MD5 hash of participant's IP address"]])
                      print("\t".join(line), file=outFile_trials)
                  else:
                      assert False, line[stoi_coordinates["Controller name"]]

        
