<?php
namespace Fajuu\ContactButton\Listeners;
#
use Flarum\Event\ConfigureLocales;
use Flarum\Event\ConfigureWebApp;
use Illuminate\Contracts\Events\Dispatcher;
use DirectoryIterator;
use Flarum\Event\ConfigureClientView;
#
class AddClientAssets
{
  #
  #
	public function subscribe(Dispatcher $events)
    {
      #
      $events->listen(ConfigureClientView::class, [$this, 'configureClientView']);
      $events->listen(ConfigureWebApp::class, [$this, 'addAssets']);
      $events->listen(ConfigureLocales::class, [$this, 'configLocales']);
      #
    }
	#
  #
	public function addAssets(ConfigureWebApp $app)
  {
    #
    if ($app->isForum())
    {
      #
      $app->addAssets([
        __DIR__.'/../../js/forum/dist/extension.js',
      ]);
      $app->addBootstrapper('fajuu/contactbutton/main');
      #
    }
    #
  }
	#
  #
	public function configureClientView(ConfigureClientView $event)
  {
    #
    if ($event->isAdmin())
    {
      #
      $event->addAssets(__DIR__.'/../../js/admin/dist/extension.js');
      $event->addBootstrapper('fajuu/contactbutton/main');
      #
    }
    #
  }
	#
  #
	public function configLocales(ConfigureLocales $event)
  {
    #
    foreach (new DirectoryIterator(__DIR__.'/../../locale') as $file)
    {
      #
      if ($file->isFile() && in_array($file->getExtension(), ['yml', 'yaml'], false))
      {
        #
        $event->locales->addTranslations($file->getBasename('.'.$file->getExtension()), $file->getPathname());
        #
      }
      #
    }
    #
  }
  #
  #
}
#