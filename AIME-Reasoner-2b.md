# AIME-Reasoner-2B: Intelligence That Works Through Problems

A technical story about what happens when you stop waiting for connectivity and start thinking
locally.

## The Problem Nobody Talks About

Most AI progress assumes one thing silently: that there is a server somewhere, waiting to
respond.
For schools in rural India, for field researchers in low-connectivity zones, for students who study
after the router goes off — that assumption breaks everything.
AIME-Reasoner-2B was built for the moments when the cloud is not an option.


## What It Is

AIME-Reasoner-2B is a compact language model shaped through distillation from multiple
advanced reasoning systems — including models in the Llama 4 family and Anthropic's Opus
reasoning chains (4. 5 and 4 .6).
It was not trained only on answers. It was trained on how answers are formed.
Different reasoning styles were brought together, aligned, and compressed into a single model
small enough to run on a laptop CPU, an old Android tablet, or a Raspberry Pi tucked into a
classroom shelf.
What emerged is not just smaller. It is more deliberate.

## The Think Cache: Reasoning That Doesn't Start From Zero

Every time a standard model is asked a question, it begins from scratch — re-processing the
mechanics of how to think before it can think at all.
AIME-Reasoner-2B introduces a different approach: Think Cache.
A Think Cache is a pre-built reasoning prefix — a snapshot of structured reasoning state —
baked into the model's KV cache before inference begins. Instead of warming up the reasoning
engine on every prompt, the model starts already in reasoning mode.
What this means in practice:
Faster first-token response on constrained hardware
Consistent reasoning posture across all queries
No dependency on large context windows to prime behavior
Stable performance whether the model is answering its first question or its fiftieth
The Think Cache is not a shortcut. It is the result of distilling thousands of high-quality
reasoning traces into a reusable starting state — so that every student who asks a question gets
the same quality of structured thinking, regardless of the device they are on.

## The Think Book: Lessons That Live on the Device

A Think Cache tells the model how to reason.
A Think Book tells it what to reason about.


Think Books are structured offline knowledge bundles — domain-specific reasoning packs that
can be loaded into AIME-Reasoner-2B without any internet connection. Each Think Book
contains:
Curated problem sets and worked examples
Subject-specific reasoning traces (mathematics, logic, science)
Pre-structured question-answer flows for guided learning
Adaptive difficulty scaffolding for self-paced study
Think Books are designed to be created once, distributed freely, and consumed entirely offline.
A teacher in a low-connectivity school can author a Think Book using a simple local tool, copy it
to a USB drive, and deploy it across an entire classroom of devices running AIME-Reasoner-2B.
The model reads the Think Book. The student asks the question. The reasoning happens on the
device.
No API call. No latency. No monthly subscription. No data leaving the room.

## Offline Lesson Creation: The Full Picture

Together, Think Cache and Think Book enable something that has not existed before at this
scale:
A fully offline AI tutoring infrastructure.


A student opens their device. The model is already loaded. The Think Book for today's lesson is
already there. They ask a question about fractions, or logic, or percentage problems.
The model works through the answer step by step — not because it is retrieving a cached
response, but because it has internalized the structure of good reasoning and has the subject
context it needs to apply it.
The path to the answer is visible. The student can follow it. That is the point.

## What It Enables

```
Multi-teacher distilled · CPU inference · No internet requiredAIME-Reasoner-2B
```
```
Pre-warmed reasoning stateThink Cache
Baked into KV cache prefixHow to reason
Consistent · Fast · StableNo warm-up per query
```
```
+
```
```
Offline knowledge bundleThink Book
Teacher-authored locallyWhat to reason about
Subject-specific tracesUSB-deployable
```
```
Runs on CPU No internet Explainable · Consistent
```
```
ThinkBook and ThinkCache
```
```
Offline tutoring Full reasoning support with zero
connectivity
```
```
Capability Description
```

## A Different Kind of Infrastructure

Most AI infrastructure is designed to scale up — more GPUs, more bandwidth, more compute.
AIME-Reasoner-2B is designed to scale out — to reach the places that larger systems cannot.
It does not require a data center. It does not require a stable connection. It does not require a
procurement budget that most schools do not have.
It requires a device, a Think Book, and a student with a question.
That is enough.

## Who This Is For

```
Educators building offline lesson content for low-connectivity classrooms
EdTech developers deploying AI tutoring in emerging markets
Researchers studying reasoning behavior in small models
Institutions with air-gapped or bandwidth-constrained environments
Students who learn best when the reasoning is shown, not just the answer
```
```
Think Cache deployment Pre-warmed reasoning state for
consistent behavior on any device
Think Book authoring Teachers create and distribute
subject packs locally
Explainable answers Every response shows its reasoning
chain, not just the conclusion
Low-resource hardware Runs on CPU-only devices including
older laptops and single-board
computers
Classroom scale One USB drive can deploy the full
system across an entire school
```

## The Broader Vision

AIME-Reasoner-2B is not trying to replace large models. It is trying to reach the places they
cannot.
Every student who gets a step-by-step explanation instead of a blank screen is a student who
learned something today. Every teacher who authors a Think Book is extending the reach of
structured reasoning into a classroom that the cloud forgot.
This is what it means to build AI infrastructure for everyone — not just for everyone with a fast
connection.

AIME-Reasoner-2B · Think Cache + Think Book Architecture · Pure Offline AI Infrastructure


