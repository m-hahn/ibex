nounsAndVerbs = []

nounsAndVerbs.append(["the school principal",       "the teacher",        "had an affair with",                     "had been fired",                     "was quoted in the newspaper", "Was the XXXX quoted in the newspaper?", "Y"])
nounsAndVerbs.append(["the famous sculptor",        "the painter",        "admired more than anyone",            "wasn't talented",                    "was completely untrue", "Was the XXXX untrue?", "Y"])
nounsAndVerbs.append(["the marketing whiz",  "the artist",         "had hired",                  "was a fraud",                        "shocked everyone", "Did the XXXX shock everyone?", "Y"])
nounsAndVerbs.append(["the marathon runner",         "the psychiatrist",       "treated for his illness",                "was actually doping",            "was ridiculous", "Was the XXXX ridiculous?", "Y"])
nounsAndVerbs.append(["the frightened child",           "the medic",          "rescued from the flood",    "was completely unharmed",            "relieved everyone", "Did the XXXX relieve everyone?", "Y"])
nounsAndVerbs.append(["the alleged criminal",        "the officer",        "arrested after the murder",                  "was not in fact guilty",             "was entirely bogus", "Was the XXXX bogus?", "Y"])
nounsAndVerbs.append(["the college student",         "the professor",      "accused of cheating",                     "was dropping the class",             "made the professor happy", "Did the XXXX make the professor happy?", "Y"])
nounsAndVerbs.append(["the suspected mobster",         "the media",          "portrayed in detail",               "was on the run",                     "turned out to be true", "Did the XXXX turn out to be true?", "Y"])
nounsAndVerbs.append(["the leading man",           "the starlet",        "fell in love with",                    "would miss the show",                "almost made her cry", "Did the XXXX almost make her cry?", "Y"])
nounsAndVerbs.append(["the old preacher",        "the parishioners",   "fired yesterday",                     "stole money from the church",        "proved to be true", "Did the XXXX prove to be true?", "Y"])
nounsAndVerbs.append(["the young violinist",      "the sponsors",       "backed financially",                    "abused drugs",                       "is likely true", "Was the XXXX likely true?", "Y"])
nounsAndVerbs.append(["the conservative senator",        "the diplomat",       "opposed in the election",                   "won in the run-off",                   "really made him angry", "Did the XXXX make him angry?", "Y"])
nounsAndVerbs.append(["the military commander",        "the president",       "appointed last month",   "was pushing for war",         "troubled people", "Did the XXXX trouble people?", "Y"])
nounsAndVerbs.append(["the injured victims",        "the criminal",       "had assaulted",   "were going to survive",         "calmed everyone down", "Did the XXXX calm everyone down?", "Y"])
nounsAndVerbs.append(["the savvy politician",        "the banker",       "gave thousands of dollars",   "was laundering money",         "came as a shock to his supporters", "Did the XXXX come as a shock?", "Y"])
nounsAndVerbs.append(["the famous surgeon",        "the patient",       "accused of malpractice",   "had a fake degree",         "was not a surprise", "Was the XXXX unsurprising?", "Y"])
nounsAndVerbs.append(["the violent extremist",        "the agent",       "had just tracked down",                   "was going to get an award",         "was disconcerting", "Was the XXXX disconcerting?", "Y"])
nounsAndVerbs.append(["the office clerk",        "the customer",       "called on the phone",   "was a super hero",         "seemed absurd", "Did the XXXX seem absurd?", "Y"])
nounsAndVerbs.append(["the shady trader",        "the businessman",       "consulted for advice",   "acted on insider information",         "was confirmed", "Was the XXXX confirmed?", "Y"])
nounsAndVerbs.append(["the successful CEO",        "the employee",       "impressed with his enthusiam",   "wanted to retire",         "was entirely correct", "Was the XXXX correct?", "Y"])


topNouns = []
topNouns.append("announcement")
topNouns.append("suspicion")
topNouns.append("allegation")
topNouns.append("realization")
topNouns.append("indication")
topNouns.append("remark")
topNouns.append("speculation")
topNouns.append("assurance")
topNouns.append("presumption")
topNouns.append("finding")
topNouns.append("assertion")
topNouns.append("statement")
topNouns.append("assumption")
topNouns.append("conclusion")
topNouns.append("report")
topNouns.append("story")
topNouns.append("disclosure")
topNouns.append("confirmation")   
topNouns.append("information")
topNouns.append("evidence")
topNouns.append("reminder")
topNouns.append("rumor")
topNouns.append("thought")
topNouns.append("suggestion")
topNouns.append("revelation")    
topNouns.append("belief")
topNouns.append("inkling")
topNouns.append("suspicion")
topNouns.append("idea")
topNouns.append("claim")
topNouns.append("news")
topNouns.append("proof")
topNouns.append("admission")
topNouns.append("declaration")
topNouns.append("fact")


print(topNouns)

def printPart(item, x, j0, condition, region, outFile):
    for j, y in enumerate(x.split(" ")):
        print("\t".join([str(z) for z in [item, j+j0, y, condition, region, j+1]]), file=outFile)
    return j+j0+1

with open("regions.tsv", "w") as outFile:
  print("\t".join(["ItemNumber", "WordNumber", "WordFromItem", "Type", "Region", "NumberInRegion"]), file=outFile)
  for i, x, y in zip(range(len(nounsAndVerbs)), topNouns, nounsAndVerbs):
    print(y)
    j0=0
    j0 = printPart(i, "The", j0, "critical_g", "d1", outFile)
    j0 = printPart(i, "NOUN", j0, "critical_g", "n1", outFile)
    j0 = printPart(i, "that", j0, "critical_g", "that", outFile)
    j0 = printPart(i, y[0], j0, "critical_g", "n2", outFile)
    j0 = printPart(i, "who", j0, "critical_g", "who", outFile)
    j0 = printPart(i, y[1], j0, "critical_g", "n3", outFile)
    j0 = printPart(i, y[2], j0, "critical_g", "v3", outFile)
    j0 = printPart(i, y[3], j0, "critical_g", "v2", outFile)
    j0 = printPart(i, y[4]+".", j0, "critical_g", "v1", outFile)


    j0=0
    j0 = printPart(i, "The", j0, "critical_u", "d1", outFile)
    j0 = printPart(i, "NOUN", j0, "critical_u", "n1", outFile)
    j0 = printPart(i, "that", j0, "critical_u", "that", outFile)
    j0 = printPart(i, y[0], j0, "critical_u", "n2", outFile)
    j0 = printPart(i, "who", j0, "critical_u", "who", outFile)
    j0 = printPart(i, y[1], j0, "critical_u", "n3", outFile)
    j0 = printPart(i, y[2], j0, "critical_u", "v3", outFile)
    j0 = printPart(i, y[4]+".", j0, "critical_u", "v1", outFile)



#print(f'"critical"; {i}; The {x} that {y[0]} who {y[1]} {y[2]} {y[3]} {y[4]}.')
