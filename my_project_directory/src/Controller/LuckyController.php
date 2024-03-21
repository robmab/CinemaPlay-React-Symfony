<?php
// src/Controller/LuckyController.php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class LuckyController extends AbstractController
{
	#[Route('/lucky/number')]
	public function number(): Response
	{
		$number = random_int(0, 100);

		return $this->render('lucky/number.html.twig', [
			'number' => $number,
		]);
	}

	#[Route(
		'/lucky',
		name: 'lucky',
		condition: "context.getMethod() in ['GET'] "
	)]
	public function lucky(): Response
	{
		//var_dump();
		return $this->json([
			['name' => 'Robert', 'class' => 'Revenant'],
			['name' => 'Javier', 'class' => 'Toxic slayer'],
			['name' => 'Carlos', 'class' => 'Warrior']
		]);
	}
}
