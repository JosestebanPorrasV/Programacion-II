class User:
   def __init__(self, name, password):
        self.name = name
        self.password = password
        self._logged= False

   def login(self, password):
        if self.password == password:
            self._logged = True
            return True
        else:
            return False
