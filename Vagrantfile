Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network "private_network", ip: "192.168.33.10"

  # config.vm.synced_folder "../data", "/vagrant_data"

  config.vm.provider "virtualbox" do |vb|
     vb.memory = "2048"
  # vb.gui = true
  end

  #config.vm.provision "shell", path: "provision.sh"

  #config.vm.synced_folder "./", "/vagrant", disabled: true
  #config.vm.synced_folder "./client", "/vagrant", :mount_options => ["dmode=777", "fmode=666"]

end
