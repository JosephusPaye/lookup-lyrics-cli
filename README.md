# lookup-lyrics-cli

🎶 Look up lyrics of songs from online sources on the command line. The current available source is [Genius](https://genius.com).

This project is part of [#CreateWeekly](https://twitter.com/JosephusPaye/status/1214853295023411200), my attempt to create something new publicly every week in 2020.

## Installation

```bash
npm install -g @josephuspaye/lookup-lyrics-cli
```

## Example

### Look up lyri

The following command looks up definitions of the word "reticent":

```bash
lyrics happy "pharrell williams"
```

<details>
<summary>View output</summary>

```
Looking up "happy" by "pharrell williams"...

Happy
Artist: Pharrell Williams
Album:  G I R L


[Produced by Pharrell Williams]

[Verse 1]
It might seem crazy what I'm 'bout to say
Sunshine she's here, you can take a break
I'm a hot air balloon that could go to space
With the air, like I don't care, baby, by the way

[Chorus]
(Because I'm happy)
Clap along if you feel like a room without a roof
(Because I'm happy)
Clap along if you feel like happiness is the truth
(Because I'm happy)
Clap along if you know what happiness is to you
(Because I'm happy)
Clap along if you feel like that's what you wanna do

[Verse 2]
Here come bad news, talking this and that (Yeah!)
Well, give me all you got, don't hold it back (Yeah!)
Well, I should probably warn ya, I'll be just fine (Yeah!)
No offense to you, donΓÇÖt waste your time, here's why

[Chorus]
(Because I'm happy)
Clap along if you feel like a room without a roof
(Because I'm happy)
Clap along if you feel like happiness is the truth
(Because I'm happy)
Clap along if you know what happiness is to you
(Because I'm happy)
Clap along if you feel like that's what you wanna do

[Bridge]
Bring me down
Can't nothing bring me down
My level's too high to bring me down
Can't nothing bring me down, I said
Bring me down
Can't nothing bring me down
My level's too high to bring me down
Can't nothing bring me down, I said

[Chorus]
(Because I'm happy)
Clap along if you feel like a room without a roof
(Because I'm happy)
Clap along if you feel like happiness is the truth
(Because I'm happy)
Clap along if you know what happiness is to you
(Because I'm happy)
Clap along if you feel like that's what you wanna do
(Because I'm happy)
Clap along if you feel like a room without a roof
(Because I'm happy)
Clap along if you feel like happiness is the truth
(Because I'm happy)
Clap along if you know what happiness is to you
(Because I'm happy)
Clap along if you feel like that's what you wanna do

[Bridge]
Bring me down
Can't nothing bring me down
My level's too high to bring me down
Can't nothing bring me down, I said...

[Chorus]
(Because I'm happy)
Clap along if you feel like a room without a roof
(Because I'm happy)
Clap along if you feel like happiness is the truth
(Because I'm happy)
Clap along if you know what happiness is to you
(Because I'm happy)
Clap along if you feel like that's what you wanna do
(Because I'm happy)
Clap along if you feel like a room without a roof
(Because I'm happy)
Clap along if you feel like happiness is the truth
(Because I'm happy)
Clap along if you know what happiness is to you
(Because I'm happy)
Clap along if you feel like that's what you wanna do

```

</details>

## Usage

```bash
lyrics --help
```

```
  Description
    Find lyrics of the given song by the given artist.

  Usage
    $ lyrics <song> <artist> [options]

  Options
    -v, --version    Displays current version
    -h, --help       Displays this message

  Examples
    $ lyrics happy "pharrell williams"
    $ lyrics "say the name" clipping
```

## Licence

[MIT](LICENCE)
