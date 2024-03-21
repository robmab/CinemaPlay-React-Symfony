<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\ORM\EntityManagerInterface;

use App\Entity\Films;

class FilmsController extends AbstractController
{
	#[Route(
		'/films',
		name: 'films',
		condition: "context.getMethod() in ['GET'] "
	)]
	public function films(EntityManagerInterface $entityManager): Response
	{
		$repository = $entityManager->getRepository(Films::class);
		$films = $repository->findAll();
		//var_dump($films);
		return $this->json($films);
	}
}
