<?php

namespace App\Entity;

use App\Repository\FilmsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FilmsRepository::class)]
class Films
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 5)]
    private ?string $adult = null;

    #[ORM\Column(length: 77)]
    private ?string $backdrop_path = null;

    #[ORM\Column(length: 30)]
    private ?string $genre_ids = null;

    #[ORM\Column(length: 2)]
    private ?string $original_language = null;

    #[ORM\Column(length: 998)]
    private ?string $overview = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 7, scale: 3)]
    private ?string $popularity = null;

    #[ORM\Column(length: 32)]
    private ?string $poster_path = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $release_date = null;

    #[ORM\Column(length: 68)]
    private ?string $title = null;

    #[ORM\Column(length: 5)]
    private ?string $video = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 3, scale: 1)]
    private ?string $vote_average = null;

    #[ORM\Column]
    private ?int $vote_count = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAdult(): ?string
    {
        return $this->adult;
    }

    public function setAdult(string $adult): static
    {
        $this->adult = $adult;

        return $this;
    }

    public function getBackdropPath(): ?string
    {
        return $this->backdrop_path;
    }

    public function setBackdropPath(string $backdrop_path): static
    {
        $this->backdrop_path = $backdrop_path;

        return $this;
    }

    public function getGenreIds(): ?string
    {
        return $this->genre_ids;
    }

    public function setGenreIds(string $genre_ids): static
    {
        $this->genre_ids = $genre_ids;

        return $this;
    }

    public function getOriginalLanguage(): ?string
    {
        return $this->original_language;
    }

    public function setOriginalLanguage(string $original_language): static
    {
        $this->original_language = $original_language;

        return $this;
    }

    public function getOverview(): ?string
    {
        return $this->overview;
    }

    public function setOverview(string $overview): static
    {
        $this->overview = $overview;

        return $this;
    }

    public function getPopularity(): ?string
    {
        return $this->popularity;
    }

    public function setPopularity(string $popularity): static
    {
        $this->popularity = $popularity;

        return $this;
    }

    public function getPosterPath(): ?string
    {
        return $this->poster_path;
    }

    public function setPosterPath(string $poster_path): static
    {
        $this->poster_path = $poster_path;

        return $this;
    }

    public function getReleaseDate(): ?\DateTimeInterface
    {
        return $this->release_date;
    }

    public function setReleaseDate(\DateTimeInterface $release_date): static
    {
        $this->release_date = $release_date;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getVideo(): ?string
    {
        return $this->video;
    }

    public function setVideo(string $video): static
    {
        $this->video = $video;

        return $this;
    }

    public function getVoteAverage(): ?string
    {
        return $this->vote_average;
    }

    public function setVoteAverage(string $vote_average): static
    {
        $this->vote_average = $vote_average;

        return $this;
    }

    public function getVoteCount(): ?int
    {
        return $this->vote_count;
    }

    public function setVoteCount(int $vote_count): static
    {
        $this->vote_count = $vote_count;

        return $this;
    }
}
