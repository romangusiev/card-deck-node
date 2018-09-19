# Card Deck API
API used to manage card deck

- [Create new Deck](#create-new-deck)
- [Get Deck by Id](#get-deck-by-id)
- [Shuffle Deck by Id](#shuffle-deck-by-id)
- [Cut Deck by Id](#send-proposal-email)
- [Get next card from Deck](#get-next-card-from-deck)

## Create new Deck
|Endpoint                 |HTTP Verb |HTTP Status code |
|:------------------------|:--------:|:---------------:|
|/deck                    |POST      |200              |

Example:

    POST /deck

#### Response
    {
        "id": "aed6f71c-fd5c-49b2-a281-4c54fe23d9a3"
    }


### Errors
|Error code |Description        |
|:----------|:-----------------:|
|404        |Deck not found     |

## Get Deck by Id
|Endpoint                 |HTTP Verb |HTTP Status code |
|:------------------------|:--------:|:---------------:|
|/deck/{deckId}           |GET       |200              |

Example:

    GET /deck/aed6f71c-fd5c-49b2-a281-4c54fe23d9a3

#### Response
    {
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
    }

## Shuffle Deck by Id
|Endpoint                 |HTTP Verb |HTTP Status code |
|:------------------------|:--------:|:---------------:|
|/deck/{deckId}/shuffle   |POST      |200              |

Example:

    POST /deck/aed6f71c-fd5c-49b2-a281-4c54fe23d9a3/shuffle

#### Response
    200 OK

## Cut Deck by Id
|Endpoint                 |HTTP Verb |HTTP Status code |
|:------------------------|:--------:|:---------------:|
|/deck/{deckId}/cut   |POST      |200              |

Example:

    POST /deck/aed6f71c-fd5c-49b2-a281-4c54fe23d9a3/cut

#### Response
    200 OK


## Get next card from Deck
|Endpoint                 |HTTP Verb |HTTP Status code |
|:------------------------|:--------:|:---------------:|
|/deck/{deckId}/card      |GET       |200              |

Example:

    GET /deck/aed6f71c-fd5c-49b2-a281-4c54fe23d9a3/card

#### Response
    {
        "faceValue": 7,
        "suit": "Diamond"
    }
