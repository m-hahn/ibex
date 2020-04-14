

library(tidyr)
library(dplyr)

trials = read.csv("trials.tsv", sep="\t") %>% filter(Type %in% c("critical_g", "critical_u")) %>% mutate(Word = as.character(Word)) %>% mutate(ReadingTimeToFirstAnswer = as.numeric(as.character(ReadingTimeToFirstAnswer))) %>% rename(Participant=MD5HashOfParticipantsIPAddress) %>% filter(Participant > 0)
regions = read.csv("regions.tsv", sep="\t") %>% rename(Group=ItemNumber) %>% mutate(WordFromItem = as.character(WordFromItem))


trials = trials %>% mutate(ErrorHere = (Correct == "no") & (!is.na(ReadingTimeToFirstAnswer)))

trials = merge(regions, trials, by=c("Group", "WordNumber", "Type"))

mean(trials$Word == trials$WordFromItem | trials$WordFromItem == "NOUN")



nouns = trials %>% filter(WordFromItem == "NOUN") %>% select(Participant, Group, Type, Word) %>% rename(Noun = Word)
trials = merge(trials, nouns, by=c("Participant", "Group", "Type"), all=TRUE)



counts = read.csv("~/forgetting/corpus_counts/wikipedia/results/fromCorpus.csv", sep="\t")
counts = counts %>% mutate(Ratio = False_False-True_False)
trials = merge(trials, counts, by=c("Noun"), all.x=TRUE)
trials[trials$Noun == "disclosure",]$Ratio = 7.12286665859908-3.63758615972639
trials = trials %>% mutate(Ratio.C = Ratio-mean(Ratio))
trials = trials %>% mutate(Grammatical = ifelse(Type == "critical_g", 1, ifelse(Type == "critical_u", -1, 0)))



critical = trials %>% filter(Region == "v1") %>% group_by(Group, Type, Participant, Noun) %>% summarise(ReadingTimeToFirstAnswer = sum(ReadingTimeToFirstAnswer)) %>% mutate(LogTime = log(ReadingTimeToFirstAnswer))
library(lme4)
summary(lmer(LogTime ~ Type + (1+Type|Group) + (1+Type|Participant), data=critical))

critical = trials %>% filter(Region == "v1") %>% group_by(Group, Type, Participant, Noun) %>% filter(NumberInRegion == 1) %>% mutate(LogTime = log(ReadingTimeToFirstAnswer))
summary(lmer(LogTime ~ Type + (1|Noun) + (1+Type|Group) + (1+Type|Participant), data=critical))




errors = trials %>% filter(ErrorHere) %>% select(Group, Type, Participant, WordNumber, Word)

errors[order(errors$Word),] %>% filter(Participant > 1, WordNumber > 1)


summary(lmer(LogTime ~ Grammatical*Ratio.C + (1|Noun) + (1+Type|Group) + (1+Type|Participant), data=critical))

critical = trials %>% filter(Region %in% c("v1", "v2")) %>% group_by(Group, Type, Participant, Noun, Grammatical, Ratio.C) %>% summarise(ReadingTimeToFirstAnswer = sum(ReadingTimeToFirstAnswer)) %>% mutate(LogTime = log(ReadingTimeToFirstAnswer))
summary(lmer(LogTime ~ Grammatical*Ratio.C + (1|Noun) + (1+Type|Group) + (1+Type|Participant), data=critical))



# Surprisal effect on the noun
u = trials %>% filter(WordFromItem == "NOUN") %>% group_by(Noun, False_False) %>% summarise(ReadingTimeToFirstAnswer = mean(ReadingTimeToFirstAnswer, na.rm=TRUE))
cor.test(u$False_False, u$ReadingTimeToFirstAnswer, use="complete")


