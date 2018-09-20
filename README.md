# Card Deck API

## Getting Started

Installing dependencies:
```
npm install
```
Running locally:
```
npm start
```
Running the tests:
```
npm test
```

## API's

- [Create new deck](#create-new-deck)
- [Get deck by Id](#get-deck-by-id)
- [Shuffle deck by Id](#shuffle-deck-by-id)
- [Cut deck by Id](#send-proposal-email)
- [Get next card from deck](#get-next-card-from-deck)
- [Errors](#errors)

## Create new deck
|Endpoint                 |HTTP Verb |HTTP Status code |
|:------------------------|:--------:|:---------------:|
|/deck                    |POST      |200              |

#### Example:

    curl -d -X POST https://card-deck.azurewebsites.net/api/deck

#### Response:
    { "id": "aed6f71c-fd5c-49b2-a281-4c54fe23d9a3" }


## Get deck by Id
|Endpoint                 |HTTP Verb |HTTP Status code |
|:------------------------|:--------:|:---------------:|
|/deck/{deckId}           |GET       |200              |

#### Example:

    curl -X GET https://card-deck.azurewebsites.net/api/deck/5d271a3d-a217-4678-b682-4321d8a4b8e3

#### Response:
    "cards": [
        {
            "faceValue": 1,
            "suit": "Club",
            "dealt": false
        },
        {
            "faceValue": 2,
            "suit": "Diamond",
            "dealt": false
        },
        {
            "faceValue": 3,
            "suit": "Heart",
            "dealt": false
        },
        ...
        ]

## Shuffle deck by Id
|Endpoint                 |HTTP Verb |HTTP Status code |
|:------------------------|:--------:|:---------------:|
|/deck/{deckId}/shuffle   |POST      |200              |

#### Example:

    curl -d -X POST https://card-deck.azurewebsites.net/api/deck/5d271a3d-a217-4678-b682-4321d8a4b8e3/shuffle

#### Response:
    200 OK

## Cut deck by Id
|Endpoint                 |HTTP Verb |HTTP Status code |
|:------------------------|:--------:|:---------------:|
|/deck/{deckId}/cut   |POST      |200              |

#### Example:

    curl -d -X POST https://card-deck.azurewebsites.net/api/deck/5d271a3d-a217-4678-b682-4321d8a4b8e3/cut

#### Response:
    200 OK

## Delete deck by Id
|Endpoint                 |HTTP Verb |HTTP Status code |
|:------------------------|:--------:|:---------------:|
|/deck/{deckId}           |DELETE      |200              |

#### Example:

    curl -X DELETE https://card-deck.azurewebsites.net/api/deck/5d271a3d-a217-4678-b682-4321d8a4b8e3

#### Response:
    200 OK

## Get next card from deck
|Endpoint                 |HTTP Verb |HTTP Status code |
|:------------------------|:--------:|:---------------:|
|/deck/{deckId}/card      |GET       |200              |

#### Example:

    curl -X GET https://card-deck.azurewebsites.net/api/deck/5d271a3d-a217-4678-b682-4321d8a4b8e3/card

#### Response:
    { "faceValue": 7, "suit": "Diamond" }


## Errors
|Error code |Description        |
|:----------|:-----------------:|
|404        |Deck not found     |