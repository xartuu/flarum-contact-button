<?php
namespace Fajuu\ContactButton;
#
use Illuminate\Contracts\Events\Dispatcher;
#
return function (Dispatcher $events)
{
  #
	$events->subscribe(Listeners\LoadSettingsFromDatabase::class); 
  $events->subscribe(Listeners\AddClientAssets::class);
  #
};
#