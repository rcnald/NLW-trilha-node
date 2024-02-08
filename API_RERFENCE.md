## ROUTES

### /polls

## Create polls

**URL** : `/api/polls`

**Method** : POST

**Payload**
```json
{
	"title":"title",
	"options":["opt1", "opt2"],
}
```

## Get poll

**URL** : `/api/polls/${id}`

**Method** : GET

**Route param**
- `id` refer to the poll's id.

## Vote poll

**URL** : `/api/polls/${option_id}/votes`

**Method** : POST

**Route param**
- `id` refer to the option's id in poll.

**Payload**
```json
{
  "pollOptionId":"15c70754-b839-4797-b235-f2ee8473f30c"
}
```
