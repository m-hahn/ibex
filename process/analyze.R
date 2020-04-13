

library(tidyr)
library(dplyr)

trials = read.csv("trials.tsv", sep="\t") %>% filter(Type %in% c("critical_g", "critical_u")) %>% mutate(Word = as.character(Word)) %>% mutate(ReadingTimeToFirstAnswer = as.numeric(as.character(ReadingTimeToFirstAnswer))) %>% rename(Participant=MD5HashOfParticipantsIPAddress) %>% filter(Participant > 0)
regions = read.csv("regions.tsv", sep="\t") %>% rename(Group=ItemNumber) %>% mutate(WordFromItem = as.character(WordFromItem))


trials = trials %>% mutate(ErrorHere = (Correct == "no") & (!is.na(ReadingTimeToFirstAnswer)))

trials = merge(regions, trials, by=c("Group", "WordNumber", "Type"))

mean(trials$Word == trials$WordFromItem | trials$WordFromItem == "NOUN")




nouns = trials %>% filter(WordFromItem == "NOUN") %>% select(Participant, Group, Type, Word) %>% rename(Noun = Word)

trials = merge(trials, nouns, by=c("Participant", "Group", "Type"), all=TRUE)


critical = trials %>% filter(Region == "v1") %>% group_by(Group, Type, Participant, Noun) %>% summarise(ReadingTimeToFirstAnswer = sum(ReadingTimeToFirstAnswer)) %>% mutate(LogTime = log(ReadingTimeToFirstAnswer))

summary(lmer(LogTime ~ Type + (1+Type|Group) + (1+Type|Participant), data=critical))

critical = trials %>% filter(Region == "v1") %>% group_by(Group, Type, Participant, Noun) %>% filter(NumberInRegion == 1) %>% mutate(LogTime = log(ReadingTimeToFirstAnswer))

summary(lmer(LogTime ~ Type + (1|Noun) + (1+Type|Group) + (1+Type|Participant), data=critical))




errors = trials %>% filter(ErrorHere) %>% select(Group, Type, Participant, WordNumber, Word)

errors[order(errors$Word),] %>% filter(Participant > 1, WordNumber > 1)


